import { Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function AddNewProjectComponent({ handleAddProject }) {
  const [project, setProject] = useState({});
  const [progress, setProgress] = useState("Select Progress");
  const [errorMessage, setErrorMessage] = useState({});
  const formRef = useRef(null);

  // handle select progress
  const handleSelectProgress = (e) => {
    const progressValue = e.target.value;

    setProgress(progressValue);
  };

  //  handle user input
  const handleUserInput = (userInput) => {
    const { id, value } = userInput.target;
    setProject({ ...project, [id]: value });
  };

  // handle submit project
  const handleSumbitProject = (e) => {
    e.preventDefault();

    const newProject = { ...project, progress: progress };
    setProject(newProject);
    const errors = validate(newProject);
    setErrorMessage(errors);

    if (Object.keys(errors).length > 0) return;
    handleAddProject(newProject);

    if (formRef.current) {
      formRef.current.reset();
    }
    setProject({});
    setProgress("Select Progress");
  };

  // validate form
  const validate = (value) => {
    const currentDate = new Date(new Date().toLocaleDateString());
    const projectDueDate = new Date(value.dueDate);
    const error = {};
    if (!value.progress || value.progress === "Select Progress") {
      error.progress = "* Progress is required";
    }
    if (!value.projectName) {
      error.projectName = "* Project Name is required";
    }
    if (!value.dueDate) {
      error.dueDate = "* Due Date is required";
    }

    if (projectDueDate < currentDate) {
      error.dueDate = "* Due Date must be greater than current date";
    }

    return error;
  };

  return (
    <div>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className=" text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500  font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500  dark:focus:ring-custom-sky-blue-500  flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full p-4">
          <div className="relative bg-white shadow-sm rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t md:p-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Project
              </h3>
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5" ref={formRef}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2">
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={handleUserInput}
                    type="text"
                    name="projectName"
                    id="projectName"
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" +
                      (errorMessage.projectName
                        ? " !border-red-500 focus:border-red-500 dark:focus:ring-red-500"
                        : "")
                    }
                    placeholder="Type Project Name"
                  />
                </div>
                {/* Error Message */}
                <span className="flex items-center gap-1 mt-2 text-sm text-red-500">
                  {errorMessage.projectName}
                </span>

                <div className="col-span-2">
                  <label
                    htmlFor="dueDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Due Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={handleUserInput}
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" +
                      (errorMessage.dueDate
                        ? " !border-red-500 focus:border-red-500 dark:focus:ring-red-500"
                        : "")
                    }
                  />
                </div>
                {/* Error Message */}
                <span className="flex items-center col-span-2 gap-1 mt-2 text-sm text-red-500">
                  {errorMessage.dueDate}
                </span>

                <div className="col-span-2">
                  <label
                    htmlFor="progress"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Progress <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="progress"
                    className={
                      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" +
                      (errorMessage.progress
                        ? " !border-red-500 focus:border-red-500 dark:focus:ring-red-500"
                        : "")
                    }
                    onChange={handleSelectProgress}
                    aria-errormessage="input progress"
                  >
                    <option defaultValue="Select Progress">
                      Select Progress
                    </option>
                    <option value="100">100</option>
                    <option value="75">75</option>
                    <option value="50">50</option>
                    <option value="25">25</option>
                  </select>
                </div>
                {/* Error Message */}
                <span className="flex items-center gap-1 mt-2 text-sm text-red-500">
                  {errorMessage.progress}
                </span>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description
                  </label>
                  <textarea
                    onChange={handleUserInput}
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={(e) => {
                    handleSumbitProject(e);
                  }}
                  type="submit"
                  className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
