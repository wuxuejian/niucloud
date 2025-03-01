<template>
    <view class="w-screen h-screen flex flex-col" :style="themeColor()">
        <view class="flex-1">
            <!-- #ifdef H5 -->
            <view class="h-[100rpx]"></view>
            <!-- #endif -->
            <view class="px-[60rpx] pt-[100rpx] mb-[100rpx]">
                <view class="font-bold text-xl">{{ t('findPassword') }}</view>
            </view>

            <view class="px-[60rpx]">
                <u-form labelPosition="left" :model="formData" errorType='toast' :rules="rules" ref="formRef">
                    <view class="mt-[30rpx]">
                        <u-form-item label="" prop="mobile" :border-bottom="true">
                            <u-input v-model="formData.mobile" border="none" clearable :placeholder="t('mobilePlaceholder')" class="!bg-transparent" :disabled="real_name_input" fontSize="26rpx" placeholderClass="!text-[#8288A2]"/>
                        </u-form-item>
                    </view>
                    <view class="mt-[30rpx]">
                        <u-form-item label="" prop="code" :border-bottom="true">
                            <u-input v-model="formData.mobile_code" border="none" clearable :placeholder="t('codePlaceholder')" class="!bg-transparent" :disabled="real_name_input" fontSize="26rpx" placeholderClass="!text-[#8288A2]">
                                <template #suffix>
                                    <sms-code :mobile="formData.mobile" type="find_pass" v-model="formData.mobile_key"></sms-code>
                                </template>
                            </u-input>
                        </u-form-item>
                    </view>
                    <view class="mt-[30rpx]">
                        <u-form-item label="" prop="password" :border-bottom="true">
                            <u-input v-model="formData.password" border="none" type="password" clearable :placeholder="t('passwordPlaceholder')" class="!bg-transparent" :disabled="real_name_input" fontSize="26rpx" placeholderClass="!text-[#8288A2]"/>
                        </u-form-item>
                    </view>
                    <view class="mt-[30rpx]">
                        <u-form-item label="" prop="confirm_password" :border-bottom="true">
                            <u-input v-model="formData.confirm_password" border="none" type="password" clearable :placeholder="t('confirmPasswordPlaceholder')" class="!bg-transparent" :disabled="real_name_input" fontSize="26rpx" placeholderClass="!text-[#8288A2]"/>
                        </u-form-item>
                    </view>
                    <view class="mt-[80rpx]">
                        <button hover-class="none" class="bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]" :loading="loading" :loadingText="t('confirm')" @click="handleConfirm">{{t('confirm')}}</button>
                    </view>
                </u-form>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { ref, reactive, onMounted } from 'vue'
    import { t } from '@/locale'
    import { resetPassword } from '@/app/api/system'
    import { redirect } from '@/utils/common'

    const formData = reactive({
        mobile: '',
        mobile_code: '',
        mobile_key: '',
        password: '',
        confirm_password: ''
    })

	const real_name_input = ref(true);
	onMounted(() => {
		// 防止浏览器自动填充
		setTimeout(()=>{
			real_name_input.value = false;
		},800)
	});
	
    const loading = ref(false)
    const formRef = ref(null)

    const rules = {
        'password': {
            type: 'string',
            required: true,
            message: t('passwordPlaceholder'),
            trigger: ['blur', 'change']
        },
        'confirm_password': [
            {
                type: 'string',
                required: true,
                message: t('confirmPasswordPlaceholder'),
                trigger: ['blur', 'change']
            },
            {
                validator(rule, value) {
                    return value == formData.password
                },
                message: t('confirmPasswordError'),
                trigger: ['change', 'blur'],
            }
        ],
        'mobile': [
            {
                type: 'string',
                required: true,
                message: t('mobilePlaceholder'),
                trigger: ['blur', 'change'],
            },
            {
                validator(rule, value) {
                    return uni.$u.test.mobile(value)
                },
                message: t('mobileError'),
                trigger: ['change', 'blur'],
            }
        ],
        'mobile_code': {
            type: 'string',
            required: true,
            message: t('codePlaceholder'),
            trigger: ['blur', 'change']
        }
    }

    const handleConfirm = () => {
        formRef.value.validate().then(() => {
            if (loading.value) return
            loading.value = true

            resetPassword(formData).then((res : responseResult) => {
                redirect({ url: '/app/pages/auth/login', mode: 'redirectTo' })
            }).catch(() => {
                loading.value = false
            })
        })
    }
</script>

<style lang="scss">
	.u-input{
		background-color: transparent !important;
	}
</style>