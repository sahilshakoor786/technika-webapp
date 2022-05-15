import { useEffect, useState } from "react";

type prizeProps = {
  prize: string;
};

export default function Prize({ prize }: prizeProps) {
  return (
    <h1 className="animate-waving-hand flex flex-wrap font-primary text-3xl md:text-5xl text-center  text-red-600">
      PRIZE WORTH {prize}
    </h1>
  );
}
