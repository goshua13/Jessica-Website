import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Modal from '../components/modal';
import "./home.scss"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allCosmicjsVideos {
        edges {
          node {
            id
            title
            metadata {
              image {
                url
                imgix_url
              }
              video
            }
          }
        }
      }
    }
  `)

  const showVideo = (id) => {
    const video = document.getElementById(`${id}`)
    if(video.style.display === 'none') {
      return video.style.display = 'block'
    } else {
     return video.style.display = 'none'
    }
  }

  let videoDict = []
  const pages = data.allCosmicjsVideos.edges.map(({ node }) => node)
  let id = 0;
  pages.forEach(x => {
    id += 1
    videoDict.push({
      id,
      video: x.metadata.video,
      image: x.metadata.image.imgix_url,
      title: x.title,
    })
  })
  const videos = videoDict.map(x => {
    return (
      <div key={Math.random()} id='box' className='col-12 col-sm-6 col-md-4'>
        <div className='titles'>
        <div className="image_title" onClick={() => showVideo(x.id)} >
          <h2>{x.title}</h2>
          <p>&mdash; view &mdash;</p>
        </div>
        <img className="video_images" src={x.image} />
        </div>
          <Modal id={x.id} title={x.title}>
            <div  dangerouslySetInnerHTML={{ __html: x.video }} />
          </Modal>
      </div>
    )
  })
  return (
    <Layout>
      <div className="row tiles">{videos}</div>
    </Layout>
  )
}

export default Home
