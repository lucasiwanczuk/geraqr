import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function buttonExample() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm flex-col gap-6">
                <Card className="grid w-full items-center gap-4">
                  <CardHeader>
                  <CardTitle className="text-center"><h1>Crie seu agora mesmo seu QR Code!</h1></CardTitle>
                  </CardHeader>
                  <CardContent>
                   <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <img src="#"></img>
                          <Input id="name" placeholder="Digite um texto ou cole um link" />
                        </div>
                      </div>
                   </form>
                  </CardContent>
                  <CardFooter className="grid w-full items-center gap-4">
                    <Button>Gerar QR CODE</Button>
                  </CardFooter>
                </Card>
            </div>
        </div>
    );
}
