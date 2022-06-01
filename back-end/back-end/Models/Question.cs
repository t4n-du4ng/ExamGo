﻿using back_end.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(200, ErrorMessage = "Content length must be between 1 and 200.", MinimumLength = 1)]
        public string Content { get; set; }

        [Required]
        public int CorrectAnswerId { get; set; }
        //[Required]
        //public int CorrectAnswer { get; set; }

        [Required]
        public int ExamId { get; set; }
        public List<Answer> ListAnswers { get; set; }
        //[ForeignKey("ExamId")]
        //public virtual Exam Exam { get; set; }
    }
}
