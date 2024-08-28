import { SubmitHandler, useForm } from "react-hook-form";
import "./styles.css";

type FormType = {
  name: string;
  email: string;
  rating: string;
  text: string;
};

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="review_container">
      <h1>Review</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form wrapper">
        <label className="label">
          Имя{errors.name && <p className="error">{errors.name.message}</p>}
          <input
            className="input"
            type="text"
            placeholder="Your name"
            {...register("name", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
              minLength: { value: 3, message: "Минимум 3 символа" },
            })}
          />
        </label>

        <label className="label">
          Email
          {errors.email && <p className="error">{errors.email.message}</p>}
          <input
            className="input"
            type="email"
            placeholder="Your email"
            {...register("email", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
            })}
          />
        </label>
        <label className="label">
          Оцените работу сайта
          <select className="select input" {...register("rating")}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label className="label">
          Отзыв
          <textarea
            className="input"
            placeholder="Your text"
            {...register("text")}
          />
        </label>
        <input className="button" type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default Review;
