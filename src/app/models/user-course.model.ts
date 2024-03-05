export class UserCourseEntity {
  constructor(
      public user_id: string,
      public courses: {course_id: string, completed: Boolean}
  ) {}
}
