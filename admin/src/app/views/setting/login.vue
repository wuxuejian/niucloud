<template>
    <div class="main-container">

        <el-form class="page-form" :model="formData" :rules="formRules"  label-width="150px" ref="ruleFormRef" v-loading="loading">
            <el-card class="box-card !border-none" shadow="never">
                <h3 class="panel-title !text-sm">{{ t('commonSetting') }}</h3>

                <el-form-item :label="t('logonMode')" prop="type">
                    <el-checkbox v-model="formData.is_username" :label="t('isUsername')" @change="switchChange($event, 'is_username')" />
                    <div class="form-tip">{{ t('isUsernameTip') }}</div>
                    <el-checkbox v-model="formData.is_mobile" :label="t('isMobile')" @change="switchChange($event, 'is_mobile')" />
                    <div class="form-tip">{{ t('isMobileTip') }}</div>
                </el-form-item>

                <el-form-item :label="t('isBindMobile')" prop="formData.is_bind_mobile">
                    <el-switch v-model="formData.is_bind_mobile" @change="switchChange($event, 'is_bind_mobile')" />
                    <div class="form-tip">{{ t('isBindMobileTip') }}</div>
                </el-form-item>

                <el-form-item :label="t('agreement')" prop="formData.agreement_show">
                    <el-switch v-model="formData.agreement_show" @change="switchChange($event, 'agreement_show')" />
                    <div class="form-tip">{{ t('agreementTips') }}</div>
                </el-form-item>
            </el-card>

            <el-card class="box-card mt-[15px] !border-none" shadow="never">
                <h3 class="panel-title !text-sm">{{ t('tripartiteSetting') }}</h3>

                <el-form-item :label="t('isAuthRegister')" prop="formData.is_auth_register">
                    <el-switch v-model="formData.is_auth_register" @change="switchChange($event, 'is_auth_register')" />
                    <div class="form-tip">{{ t('isAuthRegisterTip') }}</div>
                </el-form-item>
            </el-card>
        </el-form>

        <div class="fixed-footer-wrap">
            <div class="fixed-footer">
                <el-button type="primary" @click="onSave(ruleFormRef)">{{ t('save') }}</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import { t } from '@/lang'
import { getLoginConfig, setLoginConfig } from '@/app/api/member'
import { FormInstance } from 'element-plus'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageName = route.meta.title

const loading = ref(true)
const ruleFormRef = ref<FormInstance>()
const formData = reactive<Record<string, number | boolean>>({
    is_username: 0,
    is_mobile: 0,
    is_auth_register: 0,
    is_bind_mobile: 0,
    agreement_show: 0
})

const formRules = computed(() => {
    return {
        // type: [
        //     {
        //         required: true,
        //         trigger: 'change',
        //         validator: (rule: any, value: any, callback: any) => {
        //             if (!formData.is_mobile && !formData.is_username) {
        //                 callback(new Error(t('mobileOrUsernameNoEmpty')))
        //             } else {
        //                 callback()
        //             }
        //         }
        //     }
        // ]
    }
})

const setFormData = async (id: number = 0) => {
    const data = await (await getLoginConfig()).data
    Object.keys(formData).forEach((key: string) => {
        if (data[key] != undefined) formData[key] = Boolean(Number(data[key]))
    })
    loading.value = false
}
setFormData()

const switchChange = (val, key) => {
    formData[key] = val
}

const onSave = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return
    await formEl.validate((valid) => {
        if (valid) {
            const save = JSON.parse(JSON.stringify(formData))
            Object.keys(save).forEach((key) => {
                save[key] = Number(save[key])
            })

            setLoginConfig(save).then(() => {
                loading.value = false
            }).catch(() => {
                loading.value = false
            })
        }
    })
}
</script>

<style lang="scss" scoped></style>
