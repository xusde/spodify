import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <div className="relative my-16 flex w-full flex-col">
      <div className="h-20 w-full bg-gradient-to-l from-transparent to-black sm:h-48"></div>
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artistData?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt="art"
          className="h-28 w-28 rounded-full border-2 object-contain shadow-xl shadow-black sm:h-48 sm:w-48"
        />

        <div className="ml-5">
          <p className="text-xl font-bold text-white sm:text-3xl">
            {" "}
            {artistId ? artistData?.attributes?.name : songData?.title}{" "}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="mt-2 text-base text-gray-400">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className="mt-2 text-base text-gray-400">
            {artistId
              ? artistData?.attributes?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>

      {/* <div className="w-full sm:h-44 h-24" /> */}
    </div>
  );
};

export default DetailsHeader;
