import s from "./styles.module.scss";
import { StoryCardProps } from "./types";

const StoryCard = ({ likes, title, onClick }: StoryCardProps) => {
  return (
    <div className="card w-96 bg-secondary shadow-xl">
      <div className="card-body ">
        <h2 className="card-title ">{title}</h2>
        <p className={s.likes}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.heart}
          >
            <path
              d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
              fill="currentColor"
            />
          </svg>
          {likes}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral" onClick={onClick}>
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

// <div className="card w-96 bg-secondary shadow-xl">
//    <Link onClick={onClick} href={"/readstory/story/chapter"}>
//      <div className="card-body ">
//        <h2 className="card-title ">{title}</h2>
//       <p className={s.likes}>
//         <svg
//           width="800px"
//           height="800px"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className={s.heart}
//          >
//            <path
//              d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
//              fill="currentColor"
//            />
//          </svg>
//          {likes}
//        </p>
//        <div className="card-actions justify-end">
//          {/* Change to Link tag once we have public profile pages */}
//          <a className="link link-hover">author username</a>
//        </div>
//      </div>
//     </Link>
//   </div>

export default StoryCard;
