import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {ChangeEvent, useState} from "react";
import {addAllowedToken} from "@/services/contreact";

const usdt = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

export function AddAllowedToken() {
    const [tokenAddress, setTokenAddress] = useState<string>(usdt);

    const handleTokenAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTokenAddress(event.target.value);
    }

    const handleAddTokenAddress = async () => {
        await addAllowedToken(tokenAddress)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add allowed token (from owner)</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add token</DialogTitle>
                    <DialogDescription>
                        Add the token address to the list of allowed tokens
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="token" className="sr-only">
                            Token
                        </Label>
                        <Input
                            id="token"
                            defaultValue={tokenAddress}
                            value={tokenAddress}
                            onChange={handleTokenAddressChange}
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="default" onClick={handleAddTokenAddress}>
                            Add
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}