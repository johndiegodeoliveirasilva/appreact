import React, { useEffect, useState } from 'react'

const Image = ({ url }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.log("Some Error", error)
      error(error)
    })
    .finally(()=> {
      setLoading(false)
    })
  }, [])

  if (loading) return "Loading....";
  if (error) return "Error!";
  return (
    <div>
      <img height={"500px"} src={data.fotos[0].src}></img>
    </div>
  )
}

export default Image