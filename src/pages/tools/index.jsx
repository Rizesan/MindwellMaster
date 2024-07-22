import {Link} from "react-router-dom";
import {Latestbooks} from "../../components/latestbooks";

export const ToolsPage = () => {
  return (
      <main>
          <div className={"container-lg text-lg-center"}>
              <h1 className={" display-5 fst-italic"}>Libros</h1>

          </div>
          <Latestbooks/>
      </main>
  )
}