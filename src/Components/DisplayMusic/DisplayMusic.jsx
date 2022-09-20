// create an HTML table and map over the songs passed down through props to generate the table data rows//

const DisplayMusic = (props) => {

    console.log(props.songs)

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>artist</th>
                    <th>album</th>
                    <th>release date</th>
                    <th>genre</th>
                    <th>like</th>
                </tr>
            </thead>

            <body>
            {props.songs.map((songs) => {
                return (
                    <tr>
                        <td>{songs.id}</td>
                        <td>{songs.title}</td>
                        <td>{songs.artist}</td>
                        <td>{songs.album}</td>
                        <td>{songs.release}</td>
                        <td>{songs.genre}</td>
                        <td>{songs.like}</td>
                    </tr>
                );
            })}
            </body>
        </table>
    )
}

export default DisplayMusic;