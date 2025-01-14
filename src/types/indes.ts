 export type Patient = {
    id: string;
    name: string;
    owner: string;
    date: Date;
    email: string;
    symptoms: string;
 }

 export type DraftPatient = Omit< Patient , "id">