/**
 * @typedef {object} Profile
 * @property {string} network
 * @property {string} username
 * @property {string} url
 */

/**
 * @typedef {object} Location
 * @property {string} city
 * @property {string} region
 */

/**
 * @typedef {object} Basics
 * @property {string} name
 * @property {string} label
 * @property {string} email
 * @property {string} phone
 * @property {string} url
 * @property {string} summary
 * @property {Location} location
 * @property {Profile[]} profiles
 */

/**
 * @typedef {object} Education
 * @property {string} institution
 * @property {string} area
 * @property {string} studyType
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} score
 * @property {string[]} courses
 */

/**
 * @typedef {object} Certification
 * @property {string} name
 * @property {string} issuer
 * @property {string} date
 */

/**
 * @typedef {object} Experience
 * @property {string} company
 * @property {string} position
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} summary
 * @property {string[]} highlights
 */

/**
 * @typedef {object} Skill
 * @property {string} name
 * @property {string} category
 */

/**
 * @typedef {object} Project
 * @property {string} name
 * @property {string} description
 * @property {string[]} tags
 * @property {string} url
 */

/**
 * @typedef {object} ResumeData
 * @property {Basics} basics
 * @property {Education[]} education
 * @property {Certification[]} certifications
 * @property {Experience[]} experience
 * @property {Skill[]} skills
 * @property {Project[]} projects
 */

export {};
