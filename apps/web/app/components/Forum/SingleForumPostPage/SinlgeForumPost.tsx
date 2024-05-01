import React, { Suspense } from "react";
import { SinlgeForumPost_Header } from "./SinlgeForumPost_Header";
import { SingleForumPost_Body } from "./SingleForumPost_Body";
import { ForumComments_Provider } from "./ForumComments_Provider";
import { ForumComments_LoadingSkeleton } from "../../Loading/Forum/ForumComment_LoadingSkeleton";
import { AddComentForm } from "./AddComentForm";

export const SinlgeForumPost = async() => {
  return (
    <section className="flex flex-col gap-[10px] w-full">
      <SinlgeForumPost_Header />
      <div className="dark:bg-[#ffffff1c] bg-white pt-[10px]">
        <SingleForumPost_Body />
        <Suspense fallback={ForumComments_LoadingSkeleton}>
          <ForumComments_Provider />
        </Suspense>
      </div>
        <AddComentForm/>
    </section>
  );
};
