import axios from "../utils/service";
import store from "../store/index";

export const checkUrlRight = (num=1,size=10) => {
  const BASEURL = store.state.baseUrl;
  return axios({
    method: "get",
    url: BASEURL + store.state.afterUrl_1,
    params: {
      pageNum: num,
      pageSize: size
    }
  });
};

export const getGrade = (id) => {
  const BASEURL = store.state.baseUrl;
  return axios({
    method: "get",
    url: BASEURL + store.state.afterUrl_2,
    params: {
      id,
    },
  });
};

export const getTeacher = (id) => {
  const BASEURL = store.state.baseUrl;

  return axios({
    method: "get",
    url: BASEURL + store.state.afterUrl_3,
    params: {
      id
    }
  });
};

export const getFiring = () => {
  const BASEURL = store.state.baseUrl;

  return axios({
    method: "get",
    url: BASEURL + store.state.afterUrl_4,
  });
};

export const postMsg = (value) => {
  const BASEURL = store.state.baseUrl;

  return axios({
    method: "post",
    url: BASEURL + store.state.afterUrl_5,
    data: value
  })
}
