
export const GifItem = ({title, url}) => {
    console.log(title);
  return (
    <div className="card">
        <img src={url} alt={title} />
    </div>
  )
}
