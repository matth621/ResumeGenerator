<template>
    <div class="split-vue">
        <div class="one-three">
            <Card title="About You" icon="user">
                <TextInput name="Name" v-model="resume_data.resume_name" @blur="updateJSON" />
                <TextInput name="Subtitle" v-model="resume_data.resume_subtitle" @blur="updateJSON" />
                <TextInput name="Address Line 1" v-model="resume_data.resume_address_1" @blur="updateJSON" />
                <TextInput name="Address Line 2" v-model="resume_data.resume_address_2" @blur="updateJSON" />
                <TextInput name="Address Line 3" v-model="resume_data.resume_address_3" @blur="updateJSON" />
                <TextInput name="Address Line 4" v-model="resume_data.resume_address_4" @blur="updateJSON" />
                <TextInput name="Telephone" v-model="resume_data.resume_telephone" @blur="updateJSON" />
                <TextInput name="E-Mail" v-model="resume_data.resume_email" @blur="updateJSON" />
            </Card>
            <Card title="Motivation" icon="lightbulb">
                <TextInput name="Motivational Statement" v-model="resume_data.resume_motivation" @blur="updateJSON" />
            </Card>
            <Card title="Abilities" icon="list-check">
                <TextInput name="Drivers Licence" v-model="resume_data.resume_driver" @blur="updateJSON" />
                <RecurringTextVue name="Languages" v-model="resume_data.resume_languages" @blur="updateJSON" />
                <RecurringCompetency name="Competencies" v-model="resume_data.resume_competencies" @blur="updateJSON" />
                <RecurringTextVue name="Hobbies" v-model="resume_data.resume_hobbies" @blur="updateJSON" />
                <TextInput name="Other Data" v-model="resume_data.resume_other" @blur="updateJSON" />
            </Card>
            <Card title="Work Experience" icon="briefcase">
                <WorkCardStack v-model="resume_data.resume_work_history" @blur="updateJSON" />
            </Card>
            <Card title="Education" icon="user-graduate">
                <EducationCardStack v-model="resume_data.resume_education" @blur="updateJSON" />
            </Card>
        </div>
        <div class="two-three" @click="generatePDF">
            <div id="resume_preview" class="resume_preview">
                <h1 class="resume_heading">{{ resume_data.resume_name }}</h1>
                <h2 class="resume_subheading">{{ resume_data.resume_subtitle }}</h2>
                <div class="resume_sidebar">
                    <div class="resume_address">
                        <div class="icon">
                            <font-awesome-icons icon="house-chimney" />
                        </div>
                        {{resume_data.resume_address_1}}<br v-if="resume_data.resume_address_1" />
                        {{resume_data.resume_address_2}}<br v-if="resume_data.resume_address_2" />
                        {{resume_data.resume_address_3}}<br v-if="resume_data.resume_address_3" />
                        {{resume_data.resume_address_4}}<br v-if="resume_data.resume_address_4" />
                    </div>
                    <div class="resume_phone">
                        {{resume_data.resume_telephone}}
                    </div>
                    <div class="resume_email">
                        {{resume_data.resume_email}}
                    </div>
                    <div class="resume_driving">
                        <div class="icon" v-if="resume_data.resume_driver">
                            <font-awesome-icons icon="car" />
                        </div>
                        <strong>Driving Licence:</strong><br />
                        {{resume_data.resume_driver}}
                    </div>
                    <div class="resume_languages">
                        <div class="icon" v-if="resume_data.resume_languages">
                            <font-awesome-icons icon="language" />
                        </div>
                        <strong>Languages:</strong><br />
                        <span v-for="lang in resume_data.resume_languages" :key="lang">{{lang}}<br /></span>
                    </div>
                    <div class="resume_competencies">
                        <div class="icon" v-if="resume_data.resume_competencies">
                        <font-awesome-icons icon="gears" />
                        </div>
                        <strong>Key Competencies:</strong><br />
                        <div v-for="(skill, key) in resume_data.resume_competencies" :key="key">
                            {{skill.name}}
                            <div class="competency_mark">
                                <span v-for="index in 5" :key="index">
                                    <font-awesome-icons v-if="skill.level >= index" icon="circle" />
                                    <font-awesome-icons v-if="skill.level < index" :icon="['far', 'circle']" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="resume_hobbies">
                        <div class="icon" v-if="resume_data.resume_hobbies">
                            <font-awesome-icons v-if="resume_data.resume_hobbies" icon="star" />
                        </div>
                        <strong>Hobbies:</strong><br />
                        {{ resume_data.resume_hobbies.join(', ')}}
                    </div>
                    <div class="resume_other">
                        {{ resume_data.resume_other }}
                    </div>
                    <div class="resume_references">
                        <hr />
                        References Available Upon Request
                    </div>
                </div>
                <div class="resume_main">
                    <div class="motivation">
                        <font-awesome-icons v-if="resume_data.resume_motivation" icon="quote-left" />
                        {{resume_data.resume_motivation}}
                    </div>
                    <div class="education">
                        <font-awesome-icons v-if="resume_data.resume_education" icon="graduation-cap" />
                        <h2>Education</h2>
                        <div v-for="education in resume_data.resume_education" :key="education">
                            {{education.completionYear}} - <strong>{{education.courseName}}</strong><br />
                            <em>{{education.educationName}}</em><br />
                            {{education.keyAreas.join(', ')}}<br />
                        </div>
                    </div>
                    <div class="work">
                        <font-awesome-icons v-if="resume_data.resume_work_history" icon="briefcase" />
                        <h2>Professional Experiences</h2>
                        <div v-for="work in resume_data.resume_work_history" :key="work">
                            <em>{{work.startDate}} - {{work.endDate}}:</em> <strong>"{{work.companyName}}", </strong>{{work.location}}<br />
                            <strong>{{work.jobTitle}}</strong><br />
                            <ul>
                                <li v-for="responsibility in work.responsibilities" :key="responsibility">
                                    {{responsibility}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import TextInput from './TextInput.vue';
import RecurringTextVue from './RecurringTextVue.vue';
import RecurringCompetency from './RecurringCompetency.vue';
import WorkCardStack from './WorkCardStack.vue';
import EducationCardStack from './EducationCardStack.vue';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
export default {
    beforeMount() {
        let storedData = this.$cookies.get('resumeData');
        if (null != storedData) {
            // Reload our datas
            this.resume_data = storedData;
        }
    },
    components: {
        Card,
        TextInput,
        RecurringTextVue,
        RecurringCompetency,
        WorkCardStack,
        EducationCardStack
    },
    methods: {
        generatePDF() {
            let resume = window.document.getElementById("resume_preview");
            html2canvas(resume, {scale: 2}).then((canvas) => {
                    var imgData = canvas.toDataURL('image/png', 1);
                    var doc = new jsPDF({
                        orientation: 'p', 
                        unit: 'px', 
                        format:'a4', 
                        hotfixes: ['px_scaling']
                        });
                    doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
                    doc.save('resume.pdf');
            });
        },
        updateJSON() {
            this.$cookies.set('resumeData', JSON.stringify(this.resume_data));
        }
    },
    data() {
        return {
            resume_data: {
                resume_name: '',
                resume_subtitle: '',
                resume_address_1: '',
                resume_address_2: '',
                resume_address_3: '',
                resume_address_4: '',
                resume_telephone: '',
                resume_email: '',
                resume_motivation: '',
                resume_driver: '',
                resume_languages: [],
                resume_competencies: [],
                resume_hobbies: [],
                resume_other: '',
                resume_work_history: [],
                resume_education: []
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    @import '@/assets/_variables';
    .split-vue {
        display: flex;
        flex: 100px 1 0;
        overflow: hidden;
    }
    .one-three {
        flex: 33% 1 1;
        height: 100%;
        overflow-y: scroll;
    }
    .two-three {
        flex: 67% 1 1;
        overflow-y: scroll;
    }
    .resume_preview {
        margin: 0 auto;
        background-color: white;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: $darkish;
        position: relative;
        overflow: hidden;
        width: calc(210px * 4);
        height: calc(297px * 4);
        .resume_heading {
            position: absolute;
            top: 15px;
            left: 25px;
            width: calc(100% - 25px - 30px);
            margin: 0;
            padding: 15px 15px 20px 15px;
            background-color: $lightest;
            z-index: 10;
        }
        .resume_subheading {
            position: absolute;
            text-align: center;
            width: calc(100% - 25px);
            top: 42px;
            left: 25px;
            z-index: 11;
        }
        .resume_sidebar {
            background-color: $lighter;
            position: absolute;
            padding-top: 90px;
            top: 0px;
            left: 15px;
            height: calc(100% - 90px);
            width: 230px;
            z-index: 9;
            .resume_address,
            .resume_phone,
            .resume_email,
            .resume_driving,
            .resume_languages,
            .resume_competencies,
            .resume_hobbies,
            .resume_other,
            .resume_references {
                position: relative;
                text-align: left;
                margin: 15px 0 0 35px;
                .icon {
                    position: absolute;
                    left: -33px;
                    top: -10px;
                    background-color: $darkish;
                    display: inline;
                    padding: 5px 6px;
                    border-radius: 50px 50px 0 50px;
                    color: #FFFFFF;
                }
                .competency_mark {
                    display: block;
                    &>span {
                        margin-right: 5px;
                    }
                }
                hr {
                    border: none;
                    border-top: $darkish 5px solid;
                }
            }
            .resume_phone,
            .resume_email {
                margin-top: 0;
            }
        }
        .resume_main {
            text-align: left;
            position: absolute;
            top: 100px;
            left: 250px;
            .motivation {
                font-size: 32px;
            }
            .svg-inline--fa {
                font-size: 50px;
            }
            .education,
            .work {
                margin-top: 20px;
                h2 {
                    display: inline;
                }
            }
        }
    }
</style>