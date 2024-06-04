export class CourseModule {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public labels: string[],
    public type: string,
    public assessment: number[],
    public modality: string,
    public duration: number,
    public deadline: Date,
    public created_by: Created_by,
    public img: string
  ) {}
}

interface Created_by {
  teacher_id: string;
  description: string;
  slogan: string;
  img: string
}