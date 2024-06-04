import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo({ button, children, title, description }: any) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {/* <Button variant="outline">Open Drawer</Button> */}
        {button}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription className="line-clamp-2">
              {description}
            </DrawerDescription>
          </DrawerHeader>
          {children}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">
                <a href="#contact">Contact us </a>
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
