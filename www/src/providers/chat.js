import API, { POST } from '@/services/api';

const createUrl = {
  send: () =>({
    method: POST,
    url: '/get-answer',
  }),
};

async function send (q) {
  try {
    const fd = new FormData();
    fd.append('q', q);
    const { url, method } = createUrl.send();
    const { status, data } = await API[method](url, fd);
    console.log('Chat.send',{ q }, { status, data });
    if (status != 200) {
      throw `Bad status (${ status })`;
    }
    if (!data.ok) {
      throw data;
    }
    return data.a.trim();
  } catch (error) {
    console.error('Chat.send - ', error);
    throw error;
  }
}

export default {
  send,
};