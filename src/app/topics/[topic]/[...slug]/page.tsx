type Props = {
    params: Promise <{slug:string[]}>
}
const Topic = async ({ params }: Props) => {
    const { slug } = await params
    console.log(slug);
        const post = slug[0]
        return (
            <section  style={{
      backgroundColor: "yellow"
        
    }}>
                <h1>{post.charAt(0).toUpperCase() + post.slice(1)}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum mollitia accusantium, ad nihil dolor expedita eos totam quod eveniet aliquid itaque. Excepturi, enim. Quia ducimus cum numquam? Debitis tenetur accusantium asperiores quam quae aspernatur eveniet harum ipsa laboriosam provident necessitatibus vel laborum distinctio obcaecati vero in dignissimos, reprehenderit nulla officiis deserunt. Magni blanditiis dignissimos omnis voluptatibus magnam optio minus voluptatum? Totam cum nemo voluptates nesciunt facilis molestiae debitis ipsa exercitationem voluptatibus praesentium autem unde labore veniam, perspiciatis earum laudantium assumenda, ipsum, cupiditate architecto nam. Harum dignissimos rem maxime odio aliquid ipsa debitis? In laboriosam ratione omnis eos eligendi quos incidunt, repellendus quaerat eveniet ipsum nobis asperiores praesentium ut voluptas blanditiis repellat deserunt perspiciatis quod quae unde consequatur obcaecati dignissimos? Molestias, molestiae minima. Magnam cupiditate numquam veniam corporis corrupti deserunt illo doloremque quod esse odit quibusdam odio ipsa atque rem debitis, facilis explicabo, reiciendis velit cumque eveniet? Natus hic repellendus vel, harum sapiente assumenda non illo deleniti tempore voluptates sit! Nemo ipsum, qui adipisci assumenda commodi, error, libero voluptatibus asperiores nulla voluptates ipsam voluptatum magnam obcaecati ea! Expedita hic veniam quaerat. Nisi magnam ab harum earum! Consequatur rerum non deleniti sunt hic iste ratione adipisci unde! Tenetur numquam facilis ipsum.</p>
            </section>
        )        
}

export default Topic

