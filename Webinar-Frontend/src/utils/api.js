/* eslint-disable no-console */
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
})

const request = ({
  method,
  url,
  data = null,
  params = null,
  headers = null,
}) => axiosInstance({
  method,
  url,
  data,
  params,
  headers,
})
  .then(res => {
    console.log(res)
    return res
  })
  .catch(err => {
    console.error(err, err.response)
    if (err && err.response && err.response.status === 401) {
      if (localStorage.getItem('authToken')) {
        localStorage.removeItem('authToken')
        window.location.reload()
      }
    }

    if (
      err &&
      err.response &&
      err.response.status === 404 &&
      window.location.pathname !== '/404'
    ) {
      window.location.href = '/404'
    }
    throw err
  })

const api = {}

// Upload 
api.postUploadImage = ({ data }) => request({
  method: 'post',
  url: `/upload/image`,
  data,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})


api.postUploadVideo = ({ data }) => request({
  method: 'post',
  url: `/upload/video`,
  data,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})

api.postUploadFile = ({ data }) => request({
  method: 'post',
  url: `/upload/file`,
  data,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})



// Webinar
api.getAllWebinar = () => request({
  method: 'get',
  url: `/webinar/accepted`,
})

api.getWebinarByTier = ({ urlParams }) => request({
  method: 'get',
  url: `/webinar/tier/${urlParams.id}`,
})

api.getWebinar = ({ urlParams }) => request({
  method: 'get',
  url: `/webinar/${urlParams.id}`,
})

api.getUserToWebinar = ({ urlParams }) => request({
  method: 'get',
  url: `/webinar/${urlParams.id}/user/${urlParams.userId}`,
})

api.patchPostWebinar = ({ urlParams, data }) => request({
  method: urlParams.id ? 'put' : 'post',
  url: `/webinar/${urlParams.id || ''}`,
  data,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})

api.getWebinarUsers = ({ urlParams }) => request({
  method: 'get',
  url: `/webinar/${urlParams.id}/user`,
})


// Webinar Category
api.getWebinarCategoryList = () => request({
  method: 'get',
  url: `/webinarCategory`,
})


// User
api.postLoginUser = ({ data }) => request({
  method: 'post',
  url: `/user/login`,
  data,
})

api.postUser = ({ data }) => request({
  method: 'post',
  url: `/user`,
  data,
})

// Lecturer
api.postLecturer = ({ data }) => request({
  method: 'post',
  url: `/lecturer`,
  data,
})

api.postLoginLecturer = ({ data }) => request({
  method: 'post',
  url: `/lecturer/login`,
  data,
})

api.getLecturerWebinars = ({ params }) => request({
  method: 'get',
  url: `/lecturer/${params.lecturerId}/webinar`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})

api.getLecturerInfo = () => request({
  method: 'get',
  url: `/lecturer/me`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})


// User Information
api.getUserInfo = () => request({
  method: 'get',
  url: `/user/me`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})


api.getPurchasedWebinar = ({ params }) => request({
  method: 'get',
  url: `/user/${params.userId}/webinar/${params.webinarId}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})

api.getUserWebinars = ({ params }) => request({
  method: 'get',
  url: `/user/${params.userId}/webinar`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})


export default api
