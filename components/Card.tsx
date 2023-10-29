import React from 'react';
import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';

export const MovieCard = () => {
  return (
    <div className="gap-2 px-8 pt-5">
      <Card isFooterBlurred className=" mx-auto w-[70%] h-[600px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Article</p>
          <h4 className="text-black font-medium text-2xl">Avatar</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://kinohod.ru/o/a1/a7/a1a73c66-c3a7-11e3-8942-36ed6212105f.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              soluta rem autem, harum eveniet earum. Nostrum excepturi
              consequatur inventore reiciendis.
            </p>
            <p className="text-black text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              reiciendis animi tenetur fugit beatae corrupti nulla consequatur
              ratione assumenda perspiciatis in veniam quae, delectus sed atque
              esse, mollitia culpa error!
            </p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            add
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
