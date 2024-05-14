import Comment from "@/components/MeetingDetail/Comment";
import { fetchComments, createComment } from "@/services/MeetingDetail";
import { CommentType } from "@/types/MeetingDetail";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DotsLoader from "@/components/@common/DotsLoader";
import ErrorMessage from "../@common/ErrorMessage";

const Comments = () => {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");

  const { id: meetingDetailId } = useParams<string>();

  const {
    isLoading: getLoading,
    isError: getError,
    data: comments,
  } = useQuery({
    queryKey: ["comments", meetingDetailId],
    queryFn: () => fetchComments(meetingDetailId!),
  });

  const { isError: postError, mutate: postComment } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", meetingDetailId!] });
    },
  });

  if (postError) {
    alert("댓글 작성에 실패했습니다");
  }

  return (
    <div
      className="w-full flex flex-col gap-[20px] justify-between"
      style={{ height: "calc(100% - 60px" }}
    >
      {/* 댓글조회 */}
      {getLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <DotsLoader scale={50} opacity={50} />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-[16px] overflow-scroll">
          {getError ? (
            <ErrorMessage>댓글을 조회할 수 없습니다</ErrorMessage>
          ) : comments.data.length === 0 ? (
            <ErrorMessage>작성된 댓글이 없습니다</ErrorMessage>
          ) : (
            comments.data.map((comment: CommentType) => (
              <Comment
                key={comment.commentId}
                comment={comment}
                myMemberId={comments.currentMemberId}
                meetingDetailId={meetingDetailId}
              />
            ))
          )}
        </div>
      )}

      {/* 댓글작성 */}
      <div className="flex min-h-[98px] gap-[8px]">
        <textarea
          className="flex-[10] bg-[#000000] bg-opacity-30 resize-none focus:outline-none rounded-lg p-[10px]"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <div
          className="flex-[1] flex bg-[#000000] bg-opacity-50 hover:bg-opacity-30 justify-center items-center rounded-lg cursor-pointer"
          onClick={() => {
            try {
              postComment({ meetingId: meetingDetailId!, content: content });
              setContent("");
            } catch (err) {
              console.log(err);
            }
          }}
        >
          작성
        </div>
      </div>
    </div>
  );
};

export default Comments;
