
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function Location({ open, handelClose, handleLocationConformation }: any) {
    return (
        <Dialog open={open}>
            <DialogContent className="flex h-auto w-[80%] md:w-[25%]">
                <DialogHeader>
                    <DialogTitle className="text-[18px]">Allow &quot;inshorten&quot; to access your location while using the app?</DialogTitle>
                    <DialogDescription className="py-[10px]">
                        We need access to your location to show you relevant search results.
                    </DialogDescription>
                    <div className="flex gap-[10px] justify-end">
                        <Button variant="outline" onClick={handleLocationConformation}>
                            Allow
                        </Button>
                        <Button variant="outline" onClick={handelClose}>
                            Close
                        </Button>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}