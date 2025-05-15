import BreadCrumbs from "@/components/BreadCrumbs"
import TableOfContent from "@/components/TableOfContent"
import { Metadata } from "next"
import React from "react"
type Props = {
  params: {slug: string}
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({
  title: `${params.slug}`,
  description: `Details for post ${params.slug}`
})

const PostLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    }}>
<TableOfContent/>
    <div style={{
      display: "flex",
        flexDirection: "column",
        border: "1px solid red",
        justifyContent: "center"
    }}>
      <BreadCrumbs/>
      {children}
    </div>
      </div>
  )
}

export default PostLayout