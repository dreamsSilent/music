import axios from 'axios'

const commonParams = {
    g_tk:5381,
    inCharset:'utf-8',
    outCharset:'utf-8',
    notice:0
   }

export function getDiscList() {
    const url = '/api/getDiscList'
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    })
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }

  export function getSearch(keywords) {
    const url = 'http://localhost:3000/search'
    const data = {
      keywords:keywords
    }
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res)
    })
  }

  //获取歌曲
  export function getMusicUrl(id) {
    const url = 'http://localhost:3000/music/url'
    const data = {
      id:id
    }
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res)
    })
  }

  //获取歌词
  export function getMusicLyric(id) {
    const url = 'http://localhost:3000/lyric'
    const data = {
      id:id
    }
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res)
    })
  }
