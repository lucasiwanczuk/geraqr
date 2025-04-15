'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ReactQRCode from 'react-qr-code';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image';



export default function ButtonExample() {
    const [text, setText] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState('');

    const handleGenerateQRCode = () => {
      setQrCodeValue(text);
  };

  return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm flex-col gap-6">
                <Card className="grid w-full items-center gap-4">
                  <CardHeader>
                  <CardTitle className="text-center">
                    <h1>Crie seu agora mesmo seu QR Code!</h1></CardTitle>
                  </CardHeader>
                  <CardContent>
                   <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 gap-4">
                            {qrCodeValue && (
                                <div className="grid w-full items-center justify-center mt-4">
                                  <ReactQRCode value={qrCodeValue} size={256} />
                                </div>
                              )
                            }
                          <Input 
                            id="text" placeholder="Digite um texto ou cole um link"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                          />
                        </div>
                      </div>
                   </form>
                  </CardContent>
                  <CardFooter className="grid w-full items-center gap-4">
                    <Button onClick={handleGenerateQRCode} className="color">Gerar QR CODE</Button>
                  </CardFooter>
                </Card>
                
            </div>
        </div>
    );
}