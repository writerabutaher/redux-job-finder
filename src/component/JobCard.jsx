import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{job.title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i
              className={`fa-solid fa-stop text-lg mr-1.5 ${
                job.type === "fulltime"
                  ? "!text-[#FF8A00]"
                  : job.type === "Internship"
                  ? "!text-[#FF5757]"
                  : "!text-[#56E5C4]"
              }`}
            ></i>

            {job.type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {job.salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {job.deadline}
          </div>
        </div>
      </div>
      <div className="flex mt-5 lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link
            to={"/edit-job"}
            type="button"
            className="lws-edit btn btn-primary"
          >
            <i className="mr-2 -ml-1 text-gray-300 fa-solid fa-pen"></i>
            Edit
          </Link>
        </span>

        <span className="sm:ml-3">
          <button type="button" className="lws-delete btn btn-danger ">
            <i className="mr-2 -ml-1 text-gray-300 fa-solid fa-trash"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
