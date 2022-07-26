import {players} from "../constants/players";

function ListPlayer(props) {
  return (
    <div className="list-group">
      {
        players.map((player, i) => {
          return (
            <a
              href="/#"
              key={i}
              data-id={player.id}
              className="list-group-item list-group-item-action"
              onClick={(props.onClick)}
            >{player.username}</a>
          )
        })
      }
    </div>
  )
}

export default ListPlayer;