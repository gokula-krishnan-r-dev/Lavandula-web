"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormField {
  label: string;
  id: string;
  type: string;
  autoComplete?: string;
  rows?: number;
  placeholder: string;
}

const formFields: FormField[] = [
  {
    label: "First Name",
    id: "firstName",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Location",
    id: "location",
    type: "text",
    placeholder: "Enter your location",
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Phone Number",
    id: "phoneNumber",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Details",
    id: "details",
    type: "textarea",
    rows: 4,
    placeholder: "Enter your message",
  },
];

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    location: "",
    email: "",
    phoneNumber: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          firstName: "",
          location: "",
          email: "",
          phoneNumber: "",
          details: "",
        });
      } else {
        throw new Error("Failed to submit the form.");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col border rounded-3xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
      <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
        Fill in the form
      </h2>
      {success ? (
        <div className="text-center">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m0 0a9 9 0 11-6 5.29A9 9 0 0112 21"
            />
          </svg>
          <h3 className="text-lg font-medium text-green-700 dark:text-green-500">
            Form submitted successfully!
          </h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 lg:gap-6">
            {formFields.map((field) => (
              <div
                key={field.id}
                className={
                  field.type === "textarea"
                    ? "col-span-1 sm:col-span-2"
                    : "col-span-1"
                }
              >
                <label
                  htmlFor={field.id}
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    required
                    placeholder={field.placeholder}
                    id={field.id}
                    rows={field.rows}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                ) : (
                  <input
                    required
                    placeholder={field.placeholder}
                    type={field.type}
                    id={field.id}
                    autoComplete={field.autoComplete}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                )}
              </div>
            ))}
          </div>
          {error && (
            <div className="mt-4 text-sm text-red-600 dark:text-red-500">
              {error}
            </div>
          )}
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send inquiry"}
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              We get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;

interface WorkingHour {
  day: string;
  fullDay: string;
  from: string;
  to: string;
}

const workingHours: WorkingHour[] = [
  { day: "Mon", fullDay: "Monday", from: "9:00am", to: "10:00pm" },
  { day: "Tue", fullDay: "Tuesday", from: "9:00am", to: "10:00pm" },
  { day: "Wed", fullDay: "Wednesday", from: "9:00am", to: "10:00pm" },
  { day: "Thu", fullDay: "Thursday", from: "9:00am", to: "10:00pm" },
  { day: "Fri", fullDay: "Friday", from: "9:00am", to: "10:00pm" },
  { day: "Sat", fullDay: "Saturday", from: "9:00am", to: "6:00pm" },
  { day: "Sun", fullDay: "Sunday", from: "9:00am", to: "12:00pm" },
];

export const WorkingHoursList: React.FC = () => {
  const [hours, setHours] = useState(workingHours);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    field: "from" | "to"
  ) => {
    const newHours = [...hours];
    newHours[index][field] = e.target.value;
    setHours(newHours);
  };

  return (
    <ol aria-label="Working hours" className="hours-list">
      {hours.map((hour, index) => (
        <li key={hour.day} className="hours-list__item flex items-center gap-6">
          <div className="hours-list__day">
            {hour.day}
            <span className="hidden-xs-down hidden-sm-down hidden-md-down">
              {hour.fullDay.slice(3)}
            </span>
          </div>
          <div className="hours-list__from">
            <span>
              {hour.from} - {hour.to}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
};
