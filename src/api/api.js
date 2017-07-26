/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'
/*模拟数据*/
import * as jsonDate from './jsonDate.js'
/*
    以下请求 的参数是 ：/api/film/now-playing?page=1&count=10 ，不过确有返回数据，而且数据不是模拟数据 

    之所以 能有返回数据，是因为 再dev-server.js 文件 加了以下代码
        //跨域兼容
        app.use('/api',proxyMiddleware({
          target:'http://m.maizuo.com/v4',
          changeOrigin:true
        })) 
*/

var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
    getBannerList:function(cb){
        axios.get(url + 'billboard/home?t=' + new Date()*1 + '&callback=?').then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        }).catch((error) => {
            // return Promise.reject(error)
            cb(jsonDate.default.bannerlist)
        })
    },
    /**
     * 获取首页热映电影
     */
    getNowPlaying:function(cb){
		axios.get(url + 'film/now-playing?_t=' + new Date()*1 +'&page=1&count=5').then(function(res){
			if(res.status >= 200 && res.status <300){
				cb(res.data)
			}
		}).catch((error) => {
			// return Promise.reject(error)
            cb(jsonDate.default.nowplaying)
		})
    },
    /**
     * 获取热映列表
     */
    getNowPlayList:function(page,cb){
        axios.get(url + 'film/now-playing?page=' + page + '&count=10').then(function(res){
			if(res.status >= 200 && res.status <300){
                cb(res.data)
			}
		}).catch((error) => {
			// return Promise.reject(error)
            cb(jsonDate.default.nowplaylist)
		})
    },
    /**
     * 获取首页即将上映电影
     */
    getComingSoon:function(cb){
        axios.get(url + 'film/coming-soon?__t=' + new Date()*1 +'&page=1&count=3').then(function(res){
			if(res.status >= 200 && res.status < 300){
				cb(res.data)
			}
		}).catch((error) => {
			// return Promise.reject(error)
            cb(jsonDate.default.comingsoon)
		})
    },
    /**
     * 获取即将上映列表
     */
    getComingList:function(page,cb){
        axios.get(url + 'film/coming-soon?page=' + page +'&count=10').then(function(res){
			if(res.status >= 200 && res.status < 300){
				cb(res.data)
			}
		}).catch((error) => {
			// return Promise.reject(error)
            cb(jsonDate.default.cominglist)
		})
    },
    /**
     * 根据id获取相关影片信息
     */
    getFilmDetail:function(id,cb){
        axios.get(url + 'film/' + id + '?__t=' + new Date()*1).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            // return Promise.reject(error)
            cb(jsonDate.default.filmdetail)
        })
    },
    /**
     * 获取相关影院
     */
    getCinemaList:function(id,cb){
        axios.get(url + 'film/' + id + '/cinema?__t=' + new Date()*1).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            // return Promise.reject(error)
            cb(jsonDate.default.cinemalist)
        })
    },
    /**
     * 根据影片id跟影院id获取相关电影票时段
     */
    getScheduleList:function(filmid,cinemaid,cb){
        // http://m.maizuo.com/v4/api/schedule?__t=1482575127866&film=3410&cinema=199
        axios.get(url + 'schedule?__t=' + new Date()*1 + '&film=' + filmid + '&cinema=' + cinemaid).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        }).catch((error) => {
            // return Promise.reject(error)
            cb(jsonDate.default.schedulelist)
        })
    }
}
