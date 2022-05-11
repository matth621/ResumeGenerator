<template>
    <div class="split-vue">
        <div class="one-three">
            <Card title="About You">
                <TextInput name="Name" v-model="resume_data.resume_name" @blur="updateJSON" />
                <TextInput name="Subtitle" v-model="resume_data.resume_subtitle" @blur="updateJSON" />
                <TextInput name="Address Line 1" v-model="resume_data.resume_address_1" @blur="updateJSON" />
                <TextInput name="Address Line 2" v-model="resume_data.resume_address_2" @blur="updateJSON" />
                <TextInput name="Address Line 3" v-model="resume_data.resume_address_3" @blur="updateJSON" />
                <TextInput name="Address Line 4" v-model="resume_data.resume_address_4" @blur="updateJSON" />
                <TextInput name="Telephone" v-model="resume_data.resume_telephone" @blur="updateJSON" />
                <TextInput name="E-Mail" v-model="resume_data.resume_email" @blur="updateJSON" />
            </Card>
            <Card title="Motivation" >
                <TextInput name="Motivational Statement" v-model="resume_data.resume_motivation" @blur="updateJSON" />
            </Card>
            <Card title="Abilities">
                <TextInput name="Drivers Licence" v-model="resume_data.resume_driver" @blur="updateJSON" />
                <RecurringTextVue name="Languages" v-model="resume_data.resume_languages" @blur="updateJSON" />
                <RecurringCompetency name="Competencies" v-model="resume_data.resume_competencies" @blur="updateJSON" />
                <RecurringTextVue name="Hobbies" v-model="resume_data.resume_hobbies" @blur="updateJSON" />
                <TextInput name="Other Data" v-model="resume_data.resume_other" @blur="updateJSON" />
            </Card>
            <Card title="Work Experience">
                <WorkCardStack v-model="resume_data.resume_work_history" @blur="updateJSON" />
            </Card>
            <Card title="Education">
                <EducationCardStack v-model="resume_data.resume_education" @blur="updateJSON" />
            </Card>
        </div>
        <div class="two-three" @click="generatePDF">
            <div id="resume_preview" class="resume_preview">
                <h1 class="resume_heading">{{ resume_data.resume_name }}</h1>
                <h2 class="resume_subheading">{{ resume_data.resume_subtitle }}</h2>
                <div class="resume_sidebar">
                    <div class="resume_address">
                        {{resume_data.resume_address_1}} <br />
                        {{resume_data.resume_address_2}} <br />
                        {{resume_data.resume_address_3}} <br />
                        {{resume_data.resume_address_4}} <br />
                    </div>
                    <div class="resume_phone">
                        {{resume_data.resume_telephone}}
                    </div>
                    <div class="resume_email">
                        {{resume_data.resume_email}}
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
            let doc = new jsPDF();
            doc.html(resume, {
                callback: () => {
                    doc.save("resume.pdf");
                }, 
                x: 10, 
                y: 10,
                width: 100,
                windowWidth: 100
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
        background-color: white;
        flex: 67% 1 1;
    }
    .resume_preview {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: $darkish;
        .resume_heading {
            background-color: $lightest;
        }
        .resume_sidebar {
            background-color: $lighter;
        }
    }
</style>