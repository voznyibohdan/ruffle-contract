import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useContractRead} from "wagmi";
import {abi} from '@/abi';
import {Button} from "@/components/ui/button";
import {endRaffle, startRaffle} from "@/services/contreact";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {ChangeEvent, useState} from "react";

export function RaffleState() {
    const { data, isError, isLoading } = useContractRead({
        address: '0x519b05b3655F4b89731B677d64CEcf761f4076f6',
        abi: abi,
        functionName: 'isRuffleActive',
    });

    const [winnerIndex, setWinnerIndex] = useState<string>('');

    const handleWinnerIndexChange = (event: ChangeEvent<HTMLInputElement>) => {
        setWinnerIndex(event.target.value);
    }

    const handleStartRaffle = async () => {
        await startRaffle();
    }

    const handleEndRuffle = async () => {
        await endRaffle(parseInt(winnerIndex));
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Raffle state</CardTitle>
                <CardDescription>Current raffle state: {data ? 'active' : ' not active'}</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={handleStartRaffle}>Start ruffle</Button>
            </CardContent>
            <CardFooter>
                <Dialog>
                    <DialogTrigger>
                        <Button>End ruffle</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>End ruffle</DialogTitle>
                        </DialogHeader>
                        <div>
                            <div className="grid flex-1 gap-2 mb-3">
                                <Label htmlFor="winner" className="sr-only">
                                    Winner
                                </Label>
                                <Input
                                    id="winner"
                                    defaultValue={winnerIndex}
                                    value={winnerIndex}
                                    onChange={handleWinnerIndexChange}
                                />
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button" variant="default" onClick={handleEndRuffle}>
                                    End ruffle
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}