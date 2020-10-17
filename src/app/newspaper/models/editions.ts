
export class NewspaperEdition {
    _id?: string;
    title: string;
    description: string;
    isPublished: boolean;
    dateCreated: Date;
}

export class NewspaperEditions {
    editions: NewspaperEdition[];
}