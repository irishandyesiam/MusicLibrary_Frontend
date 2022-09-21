// create an HTML table and map over the songs passed down through props to generate the table data rows//

const DisplayMusic = (props) => {

    console.log(props.songs)

    return (
        <table border='2px' style={{'borderCollapse':'collapse'}}>
            <thead>
                <tr>
                    <th>title</th>
                    <th>artist</th>
                    <th>album</th>
                    <th>release date</th>
                    <th>genre</th>
                    <th>like</th>
                </tr>
            </thead>

            <tbody>
            {props.songs.map((songs) => {
                return (
                    <tr>
                        <td>{songs.title}</td>
                        <td>{songs.artist}</td>
                        <td>{songs.album}</td>
                        <td>{songs.release_date}</td>
                        <td>{songs.genre}</td>
                        <td>{songs.like}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default DisplayMusic;