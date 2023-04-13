import {useState} from "react";
import axios from "axios";
import css from "./main.module.css";
import {Artist, Fields} from "@/lib/types";

export default function Home({initialData, initialFields}: {initialData: Array<Artist>, initialFields: Array<Fields>}) {
  const [data] = useState(initialData);
  const [fields] = useState(initialFields)
  return (
    <>
      <h1 className={css.header1}>Demo Postges Request</h1>
      <div className={css.main}>
        <div >
          <div className={css.wrapper}>
            <div className={`${css.element} ${css.header}`}>{fields[1].name}</div>
            <div className={`${css.element} ${css.header}`}>{fields[2].name}</div>
            <div className={`${css.element} ${css.header}`}>{fields[3].name}</div>
          </div>
          {data.map((artist: Artist) => (
              <div key={artist.author_id} className={css.wrapper}>
                  <div className={css.element}>{artist.name}</div>
                  <div className={css.element}>{artist.total_stream}</div>
                  <div className={css.element}>{artist.motto ? artist.motto : ""}</div>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/allArtists')
  return {
    props: {
      initialData: data.rows,
      initialFields: data.fields
    }
  }
}
