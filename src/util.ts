export function fieldValidate(target: any, fields: string[]) {
  fields.map((field: string) => {
    if (field && target[field] === undefined) {
      throw Error(`Field ${ field } is missing.`);
    }
  });
}
