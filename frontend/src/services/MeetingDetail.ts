import { axiosRequest, axiosAuthRequest } from "./axios";

// TODO - 연결 중 // 회의 상세 (id: 회의방 id)
export const fetchMeetingDetail = async (roomId: string | undefined) => {
  const res = await axiosRequest.get(`/api/meeting/detail/${roomId}`);
  return res.data.data;
};

// TODO 파일 다운로드
export const downloadFile = async (fileName: string) => {
  const res = await axiosRequest.get(`/api/meeting/file/download/${fileName}`);
  return res;
};

// 댓글 조회 (id: 회의상세 id)
export const fetchComments = async (meetingDetailId: string | undefined) => {
  const res = await axiosAuthRequest.get(`/api/meeting/comment/${meetingDetailId}`);
  return res.data;
};

// 댓글 작성
export const createComment = async (comment: { meetingId: number; content: string }) => {
  const res = await axiosAuthRequest.post("/api/meeting/comment", comment);
  console.log(res);
  return res;
};

// 댓글 삭제 (id: 댓글 id)
export const deleteComment = async (commentId: number) => {
  const res = await axiosAuthRequest.delete(`/api/meeting/comment/${commentId}`);
  return res;
};