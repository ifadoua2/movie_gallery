import React, { useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";

export const Gallery = () => {
  const [isToastDeleteOpen, setIsToastDeleteOpen] = useState(false);

  return (
    <MovieList
      isToastDeleteOpen={isToastDeleteOpen}
      setIsToastDeleteOpen={setIsToastDeleteOpen}
    />
  );
};
