import React from "react";

export const SmallMemo: React.FC<{ count: number }> = React.memo(
  ({ count }) => {
    console.log("Volviendo a redibujar XD");
    return <small>{count}</small>;
  }
);
