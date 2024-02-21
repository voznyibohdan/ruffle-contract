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
import {addAllowedToken, deposit} from "@/services/contreact";

const usdt = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

export function Deposit() {
    const [tokenIn, setTokenIn] = useState<string>(usdt);
    const [amountIn, setAmountIn] = useState<string>('0');

    const handleTokenInChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTokenIn(event.target.value);
    }

    const handleAmountInChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmountIn(event.target.value);
    }

    const handleDeposit = async () => {
        await deposit(tokenIn, parseFloat(amountIn));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Play</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Deposit</DialogTitle>
                    <DialogDescription>
                        Deposit amount
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="grid flex-1 gap-2 mb-3">
                        <Label htmlFor="tokenIn" className="sr-only">
                            Token in
                        </Label>
                        <Input
                            id="tokenIn"
                            defaultValue={tokenIn}
                            value={tokenIn}
                            onChange={handleTokenInChange}
                        />
                    </div>
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="amountIn" className="sr-only">
                            Amount in
                        </Label>
                        <Input
                            type="number"
                            id="amountIn"
                            defaultValue={amountIn}
                            value={amountIn}
                            onChange={handleAmountInChange}
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="default" onClick={handleDeposit}>
                            Deposit
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}