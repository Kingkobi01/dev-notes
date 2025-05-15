
const Topic = async ({ params }: { params: Promise<{ topic: string }> }) => {
    const {topic} = await params
  return (
    <h1  style={{
      backgroundColor: "yellow"
        
    }}>Posts about {topic.charAt(0).toUpperCase() + topic.slice(1) }</h1>
  )
}

export default Topic