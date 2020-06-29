import request from '@/utils/request';

export const mustTry = query => {
    return request({
        url: 'qunar/cities',
        method: 'get'
    });
};

export const search = query => {
  return request({
      url: 'xiecheng/restapi/h5api/globalsearch/search?action=online&source=globalonline&t=1590973731932',
      method: 'get',
      params:query
  });
};

export const adexchange = () => {
  return request({
      url: 'xiecheng/restapi/soa2/13916/adexchange.json?_rm=0.6493348370208178',
      method: 'get'
  });
};

export const wwwInnerList = query => {
  return request({
      url: 'flight/flight/api/wwwInnerList',
      method: 'get',
      params:query
  });
};


