import React from "react";

const BookModel = () => {
    let ObjectId
  return (
    <div>
      [
      {{
        subject_id: {
          type: ObjectId,
          ref: "subject",
          required: true,
        },
        book_name: {
          type: String,
          required: true,
        },
        subject: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        price_in_USD: {
          type: Number,
        },

        for_class: {
          required: true,
          type: String,
          enum: {
            values: [
              "PRE-NURSERY",
              "NURSERY",
              "LKG",
              "UKG",
              "CLASS 1",
              "CLASS 2",
              "CLASS 3",
              "CLASS 4",
              "CLASS 5",
              "CLASS 6",
              "CLASS 7",
              "CLASS 8",
              "CLASS 9",
              "CLASS 10",
              "CLASS 11",
              "CLASS 12",
            ],
            message: "{VALUE} for class is not supported!",
          },
        },
        description: {
          type: String,
          // required: true,
        },
        author: {
          type: String,
        },

        bookImage: {
          type: String,
          default: "",
        },
        bookPdf: {
          type: String,
          default: "",
        },
        quantity: {
          type: Number,
          required: true,
          min: 0,
        },
        average_rating: {
          type: Number,
          default: 0,
        },
        total_numbers_of_rating: {
          type: Number,
          default: 0,
        },
        for_outside_india: {
          type: String,
          enum: {
            values: ["YES", "NO"],
            message: "{VALUE} VALUE is not supported!",
          },
        },
        categories: {
          type: String,
          // required: true,
        },

        ratings: [
          {
            rating: {
              type: Number,
              // required: true,
              min: 1,
              max: 5,
            },
            user: {
              ref: "users",
              unique: true,
            },
          },
        ],
      }}
      ]
    </div>
  );
};

export default BookModel;
