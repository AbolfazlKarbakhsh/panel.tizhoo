class ConfigComponentsType {
    constructor(baseApi){
        this.api = baseApi
        this.create = `${baseApi}_Create`
        this.edit = `${baseApi}_Edit`
        this.get = `${baseApi}_Get` 
        this.del = `${baseApi}_Del` 
    }
}
 
let  ConfigClass = new ConfigComponentsType("ClassRome")
let ConfigLesson = new ConfigComponentsType("Lesson")
let ConfigStudents = new ConfigComponentsType("Students")
let ConfigStudentScore = new ConfigComponentsType("ReportCard")
let ConfigTest = new ConfigComponentsType("Test")



export {ConfigClass , ConfigLesson , ConfigStudents , ConfigTest , ConfigStudentScore}


