import { CHANGE_RECOMMENDS, SUB_COUNT } from "./constants"
import axios from 'axios'


export const changeBannersAction = (banners) => {
  return {
    type:CHANGE_BANNERS,
    banners:banners
  }
}

export const changeRecommendsAction = (recommends) => {
  return {
    type:CHANGE_RECOMMENDS,
    recommends:recommends
  }
}


export const fetchHomeMultData = () => {
  return (dispatch) => {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      console.log(res.data)
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })
  }
}