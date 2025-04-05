

export default  function FestCard(props){

  return (
    <div className="festivalCard">
        <div className="fest-card" >
            <div className="card-details">
                <p className="text-title">{props.festival.id} .{props.festival.name}</p>
                <p className="text-body">{props.festival.description}</p>
            </div>

        </div>
    </div>
  )
}
