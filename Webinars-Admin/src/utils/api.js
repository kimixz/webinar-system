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
}) => {
  return axiosInstance({
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
      throw err
    })
}

const api = {}


// Login
api.postLogin = ({ data }) => {
  return request({
    method: 'post',
    url: `/admin/login`,
    data,
  })
}

// User
api.getUserList = () => {
  return request({
    method: 'get',
    url: `/user`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.patchPostUser = ({ urlParams, data }) => {
  return request({
    method: urlParams.id ? 'put' : 'post',
    url: `/user/${urlParams.id || ''}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.getUser = ({ urlParams }) => {
  return request({
    method: 'get',
    url: `/user/${urlParams.id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.getUserWebinars = ({ params }) => request({
  method: 'get',
  url: `/user/${params.userId}/webinar`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})


api.getLecturerWebinars = ({ params }) => request({
  method: 'get',
  url: `/lecturer/${params.lecturerId}/webinar`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})


api.getWebinarUsers = ({ urlParams }) => request({
  method: 'get',
  url: `/webinar/${urlParams.id}/user`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
})

// Lecturer
api.getLecturerList = () => {
  return request({
    method: 'get',
    url: `/lecturer`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.patchPostLecturer = ({ urlParams, data }) => {
  return request({
    method: urlParams.id ? 'put' : 'post',
    url: `/lecturer/${urlParams.id || ''}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.getLecturer = ({ urlParams }) => {
  return request({
    method: 'get',
    url: `/lecturer/${urlParams.id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

// Webinar
api.getWebinarList = () => {
  return request({
    method: 'get',
    url: `/webinar`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.patchPostWebinar = ({ urlParams, data }) => {
  return request({
    method: urlParams.id ? 'put' : 'post',
    url: `/webinar/${urlParams.id || ''}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.getWebinar = ({ urlParams }) => {
  return request({
    method: 'get',
    url: `/webinar/${urlParams.id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.patchAcceptedWebinar = ({ urlParams, data }) => {
  return request({
    method: 'put',
    url: `/webinar/${urlParams.id || ''}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}
// Upload  
api.postUploadImage = ({ data }) => {
  return request({
    method: 'post',
    url: `/upload/image`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}


// Account
api.postChangePassword = ({ data }) => {
  return request({
    method: 'post',
    url: `/admin/changepassword`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.patchChangeName = ({ data }) => {
  return request({
    method: 'patch',
    url: `/admin`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

// Admin
api.getAdminList = () => {
  return request({
    method: 'get',
    url: `/admin`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.patchPostAdmin = ({ urlParams, data }) => {
  return request({
    method: urlParams.id ? 'put' : 'post',
    url: `/admin/${urlParams.id || ''}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.getAdmin = ({ urlParams }) => {
  return request({
    method: 'get',
    url: `/admin/${urlParams.id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

// Webinar Category
api.getWebinarCategoryList = () => {
  return request({
    method: 'get',
    url: `/webinarCategory`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.patchPostWebinarCategory = ({ urlParams, data }) => {
  return request({
    method: urlParams.id ? 'put' : 'post',
    url: `/webinarCategory/${urlParams.id || ''}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}

api.getWebinarCategory = ({ urlParams }) => {
  return request({
    method: 'get',
    url: `/webinarCategory/${urlParams.id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
}


export default api
