import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={380}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f0eeea"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="126" r="125" /> 
    <rect x="1" y="310" rx="10" ry="10" width="280" height="61" /> 
    <rect x="0" y="265" rx="9" ry="9" width="280" height="29" /> 
    <rect x="3" y="386" rx="11" ry="11" width="108" height="27" /> 
    <rect x="155" y="383" rx="11" ry="11" width="126" height="31" />
  </ContentLoader>
)


export default Skeleton