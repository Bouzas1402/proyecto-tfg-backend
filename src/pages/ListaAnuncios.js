import React, {useState} from "react";

import {nanoid} from "nanoid";

import {getAllPaginated} from "../services";
import {Anuncios, Loader} from "../components";

import InfiniteScroll from "react-infinite-scroller";

function ListaAnuncios() {
  const [anuncios, setAnuncios] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(30);
  const [, setEmpty] = useState(false);

  async function loadFunc() {
    const tamPage = 30;
    const numPage = page;
    if (size >= tamPage * numPage) {
      const getAnuncios = await getAllPaginated(tamPage, numPage);
      if (getAnuncios.result.length === 0) {
        setEmpty(true);
        setHasMore(false);
      } else {
        setAnuncios(anuncios.concat(getAnuncios.result));
        setPage(page + 1);
        setHasMore(getAnuncios.size >= tamPage * (numPage + 1) ? true : false);
        setSize(getAnuncios.size);
        setEmpty(false);
      }
    } else {
      setHasMore(false);
    }
  }

  return (
    <div>
      {
        <>
          <Anuncios anuncios={anuncios} key={nanoid()} />
          <InfiniteScroll pageStart={page} loadMore={loadFunc} hasMore={hasMore} loader={<Loader key={nanoid()} />}>
            {""}
          </InfiniteScroll>
        </>
      }
    </div>
  );
}

export {ListaAnuncios};
